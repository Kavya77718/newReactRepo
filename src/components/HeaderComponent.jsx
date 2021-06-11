import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
       super(props)
       this.state={

       }
    }
    render() {
        return (
            <div>
                <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
                  <a class="navbar-brand" href="#">Online Vegetable App</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav mr-auto">
                          <li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li>
                          <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                     </ul>     
                </div>
                </nav>   
                </header>
            </div>
        )
    }
}
export default HeaderComponent