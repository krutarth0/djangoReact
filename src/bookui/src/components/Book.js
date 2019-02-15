import React from 'react'
import './Book.css'


const Book =(props)=> {
    return (


      <div className="col-4-lg ml-4 mt-4"  >

        <div className="card" style={{width:"14rem"}}>
          <img src={props.dest} className="card-img-top" style={{width:"13rem"},{height:"16rem"}} alt=""></img>
          <div className="card-body">
            <h4>{props.Data.name}</h4>
            <h6>{props.Data.Author}</h6>
                  <div className="container">
                    <div className="row vdivide">
                      <div className="col-sm-6">{props.Data.category}</div>
                      <div className="col-sm-6">{props.Data.released_date}</div>
                    </div>
                  </div>
                  <hr/>

                  <div className="container">
                    <div className="row vdivide">
                      <div className="col-sm-12 text-center"><p>{props.Data.author_quote}</p></div>
                    </div>
                  </div>
                  <hr/>

                  <div className="container">
                    <div className="row vdivide">
                      <div className="col-sm-4">{props.Data.price}</div>
                      <div className="col-sm-4">{props.Data.page_count}</div>
                      <div className="col-sm-4">{props.Data.num_suggetions}</div>
                    </div>
                  </div>
                  <hr/>

            <a href='#' className="btn btn-primary" >read</a>

          </div>
        </div>

      </div>
    );
  }



export default Book
