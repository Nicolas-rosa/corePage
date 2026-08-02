import { useState } from 'react';

export function FAQAccordion({ items, initiallyOpen = false }) {
  const [openIndex, setOpenIndex] = useState(initiallyOpen ? 0 : null);
  return <div className="accordion">{items.map((item, index) => <div className="accordion__item" key={item.question}><button type="button" aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>{item.question}<span aria-hidden="true">{openIndex === index ? '−' : '+'}</span></button>{openIndex === index && <div className="accordion__answer"><p>{item.answer}</p></div>}</div>)}</div>;
}
