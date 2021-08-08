import './filterHeader.scss';
import { FilterButton } from '../FilterButton/FilterButton';

export function FilterHeader({ onFiltersChange }) {

  return (
    <div className='filter-header'>

      <FilterButton value='Estrellas' onChange={(value) => {
        onFiltersChange({
          stars: value,
        });
      }
      } />

      <FilterButton value='Tiempo Trabajado' onChange={(value) => {
        onFiltersChange({
          workingTime: value,
        });
      }} />

      <FilterButton value='Clientes' onChange={(value) => {
        onFiltersChange({
          clients: value,
        });
      }} />


    </div>
  );

}