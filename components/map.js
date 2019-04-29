import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const Layout = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

function MyCityMap() {
  return (
    <Layout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD3w97FWMqNaka6WZwsZeZJ-4J2gRcb6VI' }}
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