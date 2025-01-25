import { Banner, SpanCategoria, SpanTitulo } from './style'

export type Props = {
  title: string
  cover: string
  type: string
}

const BannerHeader = ({ title, cover, type }: Props) => (
  <Banner cover={cover}>
    <div className="container">
      <SpanCategoria>{type}</SpanCategoria>
      <SpanTitulo>{title}</SpanTitulo>
    </div>
  </Banner>
)

export default BannerHeader
