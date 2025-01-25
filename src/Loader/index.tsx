import { ClockLoader } from 'react-spinners'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color="#E66767" speedMultiplier={5} />
  </Container>
)

export default Loader
