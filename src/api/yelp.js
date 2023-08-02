import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer NI2oVqTOdmLfcafma1xAMDnHhNr1cgWyO8kIpmwZ_SieiNqsWOo-dH2srShhai86_Y5oBjViULm1fywqHWwfi5KhYPtxRETznnYYxVjNjy9GFoYxBYitfk-izw7FZHYx'
    }
})