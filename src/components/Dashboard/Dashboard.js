import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            headerText: '',
            subtitle: '',
            imageUrl: '',
            blogContent: ''
        }

        this.handleHeaderText = this.handleHeaderText.bind(this);
        this.handleSubtitle = this.handleSubtitle.bind(this);
        this.handleImageUrl = this.handleImageUrl.bind(this);
        this.handleBlogContent = this.handleBlogContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHeaderText(event){
        this.setState({headerText: event.target.value});
    }

    handleSubtitle(event){
        this.setState({subtitle: event.target.value});
    }

    handleImageUrl(event){
        this.setState({imageUrl: event.target.value});
    }

    handleBlogContent(event){
        this.setState({blogContent: event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
    }

    render () {
        return (
            <div className="Dashboard">
                <form onSubmit={this.handleSubmit} className="form-group addSection">
                    <label htmlFor="pickSection">Pick a section for your blog content.</label>
                    <select className="form-control" id="pickSection">
                        <option>Current Thoughts</option>
                        <option>About me</option>
                        <option>Food For Thought</option>
                        <option>My System ( Add a quote )</option>
                    </select>
                    <label>Add content for the Blog</label>
                    <input type="text" id="headerText" name="headerText" value={this.state.headerText} placeholder="Blog Title" onChange={this.handleHeaderText} className="form-control"/>
                    <input type="text" id="subtitle" name="subtitle" value={this.state.subtitle} placeholder="Subtitle" onChange={this.handleSubtitle} className="form-control"/>
                    <input type="text" id="imageUrl" name="imageUrl" value={this.state.imageUrl} placeholder="Image Url" onChange={this.handleImageUrl} className="form-control"/>
                    <input type="text" id="blogContent" name="blogContent" value={this.state.blogContent} placeholder="Blog Content" onChange={this.handleBlogContent} className="form-control"/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="explanation addSection">
                    <p>
                        If you don't want something added just leave that input blank. <span role="img" aria-label="jsx-a11y/accessible-emoji"> 😊 </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Dashboard;