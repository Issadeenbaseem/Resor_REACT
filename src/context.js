// @ts-nocheck 
import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()


 class RoomProvider extends Component {
    state = {
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:false
        

    }
//getAll data from data.js

    componentDidMount(){
        let rooms = this.formateData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        })
    }

    formateData(items){
        var tempItems = items.map(item =>{
            let id  = item.sys.id
            let images = item.fields.images.map(imags =>
                imags.fields.file.url
            )
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems

    }

    getRoom =(slug) =>{
        const tempRoom  = [...this.state.rooms]
        const room = tempRoom.find(room => room.slug === slug)
        return room
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>

                {this.props.children}
                
            </RoomContext.Provider>
        )
    }
}
  const RoomConsumer = RoomContext.Consumer

  export {RoomContext, RoomConsumer,RoomProvider}



