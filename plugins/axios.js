export default function({ $axios , redirect }, inject ){
  $axios.onRequest((config)=>{
    console.log('Making request to ' + config.url)
  })
}
