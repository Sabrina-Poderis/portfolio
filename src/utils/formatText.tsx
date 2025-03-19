const formatText = (text: string, type: 'ol' | 'ul' | 'p'= 'p'): React.ReactNode => {
  const lines = text.split("\n"); // Quebrar em linhas

  return lines.map((line, index) => {
    const formattedLine = line
      .replace(/\*(.*?)\*/g, "<b>$1</b>") // Negrito
      .replace(/_(.*?)_/g, "<i>$1</i>") // Itálico
      .replace(/~(.*?)~/g, "<s>$1</s>"); // Riscado

    if (type === 'ul') {
      return (
        <ul key={index} className="list-disc">
          <li>{formattedLine.slice(0).trim()}</li>
        </ul>
      );
    }

    if (type === 'ol') {
      return (
        <ul key={index} className="list-decimal">
          <li>{formattedLine.slice(1).trim()}</li>
        </ul>
      );
    }

    if (formattedLine.trim().length > 0) {
      return (
        <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    }

    return null;
  });
};

export default formatText;
