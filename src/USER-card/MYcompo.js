import React from 'react'

//depenciency
const faker=require('@faker-js/faker')

//
const Mycompo =(props)=>{
    return(
        <div className="ui comments">
          <div className="comment">
            <a href={faker.image.imageUrl()} className="avatar">
              <img alt='/' src={faker.image.avatar()}></img></a>
                  <div className="content">
                    <a href='/' className="author">{faker.name.firstName()}</a>
                    <div className="metadata">
                      <div className="date">{faker.date.weekday()}</div>
                      <div className="rating">
                        <i className="star icon"></i>{props.staricon}</div></div>
                    <div className="decription">{faker.commerce.productDescription()}</div>
             </div>
          </div>
        </div>
       
    )
}

export default Mycompo;
