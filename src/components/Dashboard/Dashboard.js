import React, { Component } from 'react';


class Dashboard extends Component {
    render () {
        return (
            <div className="Dashboard">
                <h3 className="jumbotron">Add a new blog to one of your existing sections</h3>
                <form className="form-group" action="POST" method="/dashboard">
                    <label htmlFor="pickSection">Pick a section for your blog content.</label>
                    <select className="form-control" id="pickSection">
                        <option>Current Thoughts</option>
                        <option>About me</option>
                        <option>Food For Thought</option>
                        <option>My System ( Add a quote )</option>
                    </select>
                    <label>Add content for the Blog</label>
                    <input type="text" id="headerText" name="headerText" placeholder="Blog Title" className="form-control"/>
                    <input type="text" id="subtitle" name="subtitle"  placeholder="Subtitle" className="form-control"/>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image Url" className="form-control"/>
                    <input type="text" id="blogContent" name="blogContent" placeholder="Blog Content" className="form-control"/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Dashboard;