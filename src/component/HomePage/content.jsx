import React, { Component } from 'react';

class Content extends Component {
    render() {
        return ( 
            <div>
                       

                <hr class="featurette-divider"></hr>
                <div class="row featurette">
                <div class="col-md-7">
                <h2 class="featurette-heading">
                Organic Vegetable. <span class="text-muted">Don't Panic, It's Organic.</span>
                </h2>
                <p class="lead" style={{textAlign:"justify"}}>
                Well, the fact that organic Vegetable cannot stay too long on display that condition forces farmer and supplier to only sell fresh product is a great advantages for customers. 
                Non organic products could remain fresh longer than organic product so sometimes customers are easily attracted by the fresh look of non organic vegetable when the fact is those fruits and vegetables were already in display for several days.
                <ul>
                    <li>Pure organic vegetable</li>
                    <li>No Compromise in Health</li>
                </ul>
                </p>
                </div>
                <div class="col-md-5">
                <img src="https://5.imimg.com/data5/VF/CT/MY-49857352/organic-vegetables-500x500.png"
                class="figure-img img-fluid rounded" alt="crop"/>
                </div>
                </div>

                <hr class="featurette-divider"></hr>
                <div class="row featurette">
                <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">
                Health.{" "}
                <span class="text-muted">Health is Wealth.</span>
                </h2>
                <p class="lead" style={{textAlign:"justify"}}>
                Eating vegetables every day is important for health. 
                They provide essential vitamins, minerals, and other nutrients, such as antioxidants and fiber. 
                Research consistently shows that people who eat at least 5 servings of vegetables a day have the lowest risk of many diseases, including cancer and heart disease.
                </p>
                </div>
                <div class="col-md-5">
                <img src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"
                class="figure-img img-fluid rounded" alt="crop"/>
                </div>
                </div>
                </div>
        );
    }
}

export default Content;

