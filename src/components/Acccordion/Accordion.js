import React from 'react';
 

 

  
const data = [
  {
    title: 'Brand information' 
  }  
]



class Accordion extends React.Component {
  render () {
  

    return (
      <div {...{ className: 'accordion_wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} title={this.props.title} desc={this.props.desc}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
  
    const {
       
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {this.props.title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}> 
            <div {...{ className: 'accordion-item__content' }}>
       
              <p {...{ className: 'accordion-item__paragraph' }}>
                {this.props.desc}
              </p>
            
            </div>
          </div>
      </div>
    )
  }
}
 
 
export default  Accordion 
