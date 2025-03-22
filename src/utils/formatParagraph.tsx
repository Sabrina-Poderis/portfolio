const formatParagraph = (text: string): React.ReactNode => {
  const lines = text.split(/\n/);
  const result: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;

  lines.forEach((line, index) => {
    const formattedLine = line
      .replace(/\*(.*?)\*/g, "<b>$1</b>") // Negrito
      .replace(/_(.*?)_/g, "<i>$1</i>") // Itálico
      .replace(/~(.*?)~/g, "<s>$1</s>"); // Riscado

    if (/^- /.test(line)) {
      // Detecta lista não ordenada (- item)
      if (listType !== "ul") {
        if (currentList.length > 0) {
          result.push(
            <div key={`list-${index}`}>
              <ol className="list-decimal">{currentList}</ol>
            </div>
          );
          currentList = [];
        }
        listType = "ul";
      }
      currentList.push(
        <li className="mb-1" key={`item-${index}`} dangerouslySetInnerHTML={{ __html: formattedLine.slice(2).trim() }} />
      );
    } else if (/^\d+\. /.test(line)) {
      // Detecta lista ordenada (1. item)
      if (listType !== "ol") {
        if (currentList.length > 0) {
          result.push(
            <div key={`list-${index}`}>
              <ul className="list-disc">{currentList}</ul>
            </div>
          );
          currentList = [];
        }
        listType = "ol";
      }
      currentList.push(
        <li className="mb-1" key={`item-${index}`} dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^\d+\. /, "").trim() }} />
      );
    } else {
      // Fecha a lista antes de um novo parágrafo
      if (currentList.length > 0) {
        result.push(
          <div key={`list-${index}`}>
            {listType === "ul" ? (
              <ul className="list-disc">{currentList}</ul>
            ) : (
              <ol className="list-decimal">{currentList}</ol>
            )}
          </div>
        );
        currentList = [];
        listType = null;
      }

      // Adiciona um novo parágrafo apenas se houver texto
      if (formattedLine.trim().length > 0) {
        result.push(
          <p key={`paragraph-${index}`} dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
    }
  });

  // Fecha a lista se ainda estiver aberta
  if (currentList.length > 0) {
    result.push(
      <div key={`final-list`}>
        {listType === "ul" ? (
          <ul className="list-disc">{currentList}</ul>
        ) : (
          <ol className="list-decimal">{currentList}</ol>
        )}
      </div>
    );
  }

  return result;
};

export default formatParagraph;
