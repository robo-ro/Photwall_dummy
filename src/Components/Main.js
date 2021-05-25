import React, {Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';
import AddPhoto from './AddPhoto';
import {Route,Link} from 'react-router-dom';
import { connect } from "react-redux";
import {removePost} from '../redux/actions'
import Single from './Single'


class Main extends Component{
     state = { loading: true}
    componentDidMount(){
     this.props.startLoadingPost().then(() => {
         this.setState({loading: false})
     })
     this.props.startLoadingComments()
    }


    

componentDidUpdate(prevProps,prevState){


}

render(){
    console.log(this.props)
    
return <div>  

                <h1>
                     <Link to="/"> Photowall</Link>
                </h1>
              <Route exact path="/" render={() =>(
                   <div>
                         
                          {/* passing the parament posts to a class calling Photowall */}
                          <Photowall {...this.props}/>
                   </div> 

              )}/>
              
      
               <Route path="/AddPhoto" render={({history}) =>(
                      <AddPhoto {...this.props} />
                    

               )}/> 
            <Route path="/single/:id" render={(params)=>(
                 <Single loading={this.state.loading}{...this.props} {...params}/>

            )}/>
      
</div>

}
}

/* function mapStateToProps(state){
    return{
    posts:state
    
    }
*/    

export default Main 






 /* url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');  */

 //url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;