import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`

function MyCityMap() {
  return (
    <Layout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBmjjxlGKDQ8MTVo5gtWKzYgBBgy4JNyWY' }}
        center={{
          lat: 19.413764,
          lng: -99.164916,
        }}
        zoom={10}
      />
    </Layout>
  )
}

export default MyCityMap