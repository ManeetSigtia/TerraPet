import { Component } from 'react';

class Images extends Component {
    render() {
        const { imageValue } = this.props;
        if (imageValue ===  0) return ( <img src={require("../imageOne.jpg")}></img>)
        else if (imageValue === 1) return ( <img src={require("../1_img2.png")}></img> )
        else if (imageValue === 2) return ( <img src={require("../1_img3.png")}></img> )
        else if (imageValue === 3) return ( <img src={require("../1_img4.png")}></img> )
        else if (imageValue === 4) return ( <img src={require("../1_img5.png")}></img> )
    }
}

export default Images;