interface FAQItemProps {
  question: string;
  answer: string;
}

interface Paragraph {
  id: number;
  content: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const renderParagraphs = (content: string) => {
    const paragraphs: Paragraph[] = content
      .split("\n\n")
      .map((paragraph, index) => ({
        id: index,
        content: paragraph,
      }));
    return paragraphs.map((paragraph) => (
      <p key={paragraph.id}>
        {paragraph.content}
        <br />
        <br />
      </p>
    ));
  };

  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
        <h2 className="font-medium">{question}</h2>
        <svg
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      {answer && (
        <div className="mt-4 px-4 -mb-5 leading-relaxed text-gray-700 dark:text-gray-200">
          {renderParagraphs(answer)}
        </div>
      )}
    </details>
  );
};

export default FAQItem;
