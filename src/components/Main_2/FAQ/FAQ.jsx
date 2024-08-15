import './FAQ.css'
import Accordion from './Accordian/Accordion'
import { QandA } from '../../../data'
import downarrow from '../../../assets/icons8-arrow-down-30.png'


const FAQ = () => {
  return (
    <section id='faq'>
        <h1>Frequently Asked Question (FAQ)</h1>
        {QandA.map((item)=>(
            <Accordion className="accordion"  key={item}>

            <Accordion.Item className="accordion-item"  id="experience">
            <Accordion.Title className="accordion-item-title">
                  {item}
                  <img src={downarrow} alt=">" />
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nobis modi beatae quis saepe ratione ut aperiam. Ipsum, nisi nostrum accusamus, velit exercitationem, quis corporis odio cupiditate perspiciatis illum sapiente.</p>
            </article>
            </Accordion.Content>
          </Accordion.Item>
          </Accordion>
        ))}
    </section>
  )
}

export default FAQ
