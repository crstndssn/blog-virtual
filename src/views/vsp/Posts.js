import React, { Component } from 'react'

import CreatePost from './CreatePost'

export default class Posts extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <CreatePost/>
            </div>
        )
    }
}
