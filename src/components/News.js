import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capitalizeF = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
    constructor(){
        super();

        console.log('HELLO I AM CONSTRUCTOR');
            this.state={
                articles:[],
                loading:false,
                page:1
            }
          }
          //KINDLY ENTER YOUR API KEY IN THIS URL
    async updateNews(pageNo){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=process.env.api_key&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      this.setState({
        loading:true
      })
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults, loading:false})

    }
    async componentDidMount(){
      this.updateNews(this.page);
    }
     handlePrevClick=async ()=>{
      this.setState({
        page:this.state.page-1,
      })
      this.updateNews(this.page)
        
    }
    handleNextclick= async ()=>{
      this.setState({
        page:this.state.page+1,
      })
      this.updateNews(this.page)
      
    }
   

  
  

  render() {
    console.log('RENDER');
    return (
      <div className='container my-3'>
      <h1 className="text-center" style={{margin:"35px 0px"}}>AK-NEWS TOP-HEADLINES from {this.capitalizeF(this.props.category)} CATEGORY</h1>
      {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return (
                <div className="col-md-4" key={element.url}>
                 <NewsItem  title={element.title?element.title.slice(0,45)+".....":"NULL"} description={element.description?element.description.slice(0,45)+"..........":"PLEASE READ NEXT ARTICLE"} imageurl={element.urlToImage?element.urlToImage:null} 
                 newsurl={element.url?element.url:"NO URL"} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />
            </div>
            )    
            })
                
        }  
        </div>
        < div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; PREVIOUS</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark " onClick={this.handleNextclick}>NEXT &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
