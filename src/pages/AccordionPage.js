import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'ansclan',
      label: 'Click to expand',
      content: 'Expanded content Expanded content Expanded content Expanded content Expanded content Expanded content'
    },
    {
      id: 'anscgan',
      label: 'Click to expand',
      content: 'Expanded content Expanded content Expanded content Expanded content Expanded content Expanded content'
    },
    {
      id: 'ansslan',
      label: 'Click to expand',
      content: 'Expanded content Expanded content Expanded content Expanded content Expanded content Expanded content'
    }
  ]

  return <Accordion items={items}/>
}

export default AccordionPage;