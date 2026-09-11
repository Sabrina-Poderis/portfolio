import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PDF_BACKGROUND = "#fff8e7";
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const TOP_MARGIN = 12;
const BOTTOM_MARGIN = 12;

export async function openResumePdf(sourceElement: HTMLElement): Promise<void> {
  const previewWindow = window.open("", "_blank");
  if (!previewWindow) return;

  try {
    await document.fonts.ready;
    const sourceCanvas = await html2canvas(sourceElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: PDF_BACKGROUND,
      ignoreElements: (element) => element.id === "game-container" || element.tagName === "CANVAS",
    });
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const contentHeight = PAGE_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN;
    const sourcePageHeight = sourceCanvas.width * (contentHeight / PAGE_WIDTH);
    const sourceScale = sourceCanvas.width / sourceElement.getBoundingClientRect().width;
    const sourceTop = sourceElement.getBoundingClientRect().top;
    const pageBoundaries = [
      ...Array.from(sourceElement.querySelectorAll<HTMLElement>(
        ".resume-header, .resume-summary, .resume-experience, .resume-education",
      )).map((element) => (element.getBoundingClientRect().bottom - sourceTop) * sourceScale),
      sourceCanvas.height,
    ].sort((first, second) => first - second);

    let sourceOffset = 0;
    let pageNumber = 0;
    while (sourceOffset < sourceCanvas.height) {
      if (pageNumber > 0) pdf.addPage();
      const pageLimit = Math.min(sourceOffset + sourcePageHeight, sourceCanvas.height);
      const nextBoundary = pageBoundaries
        .filter((boundary) => boundary > sourceOffset + 1 && boundary <= pageLimit)
        .at(-1);
      const sliceHeight = nextBoundary ? nextBoundary - sourceOffset : pageLimit - sourceOffset;
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = sourceCanvas.width;
      pageCanvas.height = sliceHeight;
      const context = pageCanvas.getContext("2d");
      if (!context) throw new Error("Não foi possível preparar a página do currículo.");
      context.fillStyle = PDF_BACKGROUND;
      context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      context.drawImage(sourceCanvas, 0, sourceOffset, sourceCanvas.width, sliceHeight, 0, 0, pageCanvas.width, pageCanvas.height);
      pdf.setFillColor(PDF_BACKGROUND);
      pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");
      pdf.addImage(pageCanvas, "JPEG", 0, TOP_MARGIN, PAGE_WIDTH, (sliceHeight * PAGE_WIDTH) / sourceCanvas.width, undefined, "FAST");
      sourceOffset += sliceHeight;
      pageNumber += 1;
    }

    const pdfUrl = URL.createObjectURL(pdf.output("blob"));
    previewWindow.document.title = "Currículo - Sabrina Poderis";
    previewWindow.location.href = pdfUrl;
    window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 60_000);
  } catch (error) {
    previewWindow.close();
    throw error;
  }
}
