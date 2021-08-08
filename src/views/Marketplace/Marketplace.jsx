import './Marketplace.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CategoryHeader } from '../../components/CateogoryHeader/CategoryHeader';
import { BoxContent } from '../../components/BoxContent/BoxContent';

export function Marketplace() {


  return (

    <div className='marketplace'>

      <Header />

      <div className='wrapper'>

        <CategoryHeader />

        <div className='section-header'>
          <h1>Software Developer</h1>
          <p>Get a beautiful website design that people love to engage with</p>
        </div>

        <BoxContent />

      </div>
      <Footer />
    </div>

  );

}