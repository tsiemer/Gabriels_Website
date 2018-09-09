import React, { Component } from 'react';

import GridImg from './Food_For_Thought_Content.js';
import '../../styles/css/food_for_thought.css';

class FoodForThought extends Component {
    render () {
        const { width, height } = this.props;
        return (
            <div className="FoodForThought" id="foodForThought">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>
                
                <div className="pinterest-container">
                    <GridImg imgUrl="http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg"/>
                    <GridImg imgUrl="http://libbyvision.com/wp-content/uploads/2017/04/food_photography_palm_beach_gardens_florida_parched_pig.jpg"/>
                    <GridImg imgUrl="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/09/5_ways_to_improve_your_food_photogrpahy.jpg"/>
                    <GridImg imgUrl="http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg"/>
                    <GridImg imgUrl="https://res.cloudinary.com/format-magazine-production/image/upload/c_crop,h_1140,w_1368,x_29,y_0,f_jpg,f_auto/dpr_1.0/c_scale,w_1200,h_1000/food_photography_cover_barry_kirn"/>
                    <GridImg imgUrl="http://libbyvision.com/wp-content/uploads/2017/04/food_photography_palm_beach_gardens_florida_parched_pig.jpg"/>
                    <GridImg imgUrl="https://res.cloudinary.com/format-magazine-production/image/upload/c_crop,h_1140,w_1368,x_29,y_0,f_jpg,f_auto/dpr_1.0/c_scale,w_1200,h_1000/food_photography_cover_barry_kirn"/>
                    <GridImg imgUrl="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/09/5_ways_to_improve_your_food_photogrpahy.jpg"/>
                    <GridImg imgUrl="http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg"/>
                    <GridImg imgUrl="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/09/5_ways_to_improve_your_food_photogrpahy.jpg"/>
                    <GridImg imgUrl="http://libbyvision.com/wp-content/uploads/2017/04/food_photography_palm_beach_gardens_florida_parched_pig.jpg"/>
                    <GridImg imgUrl="https://res.cloudinary.com/format-magazine-production/image/upload/c_crop,h_1140,w_1368,x_29,y_0,f_jpg,f_auto/dpr_1.0/c_scale,w_1200,h_1000/food_photography_cover_barry_kirn"/>
                    <GridImg imgUrl="http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg"/>
                    <GridImg imgUrl="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/09/5_ways_to_improve_your_food_photogrpahy.jpg"/>
                    <GridImg imgUrl="http://libbyvision.com/wp-content/uploads/2017/04/food_photography_palm_beach_gardens_florida_parched_pig.jpg"/>
                    <GridImg imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlTHAFxYOdi3Mt61_EQSxPViic6_y02E5-Gzs44LPXIiALVUq"/>
                </div>
            </div>
        );
    }
}

export default FoodForThought;