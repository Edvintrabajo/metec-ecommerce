import { useContext } from 'react';
import { Context } from '../../context/Context';

export const fetchData = async (dataField, checkClass, setValues) => {
  const { [dataField]: values, [setValues]: setValuesFn } = useContext(Context);
  const filterItems = document.querySelectorAll('.filter-item');
  const filterExtras = document.querySelector(checkClass);
  let dbValue;
  
  filterItems.forEach((item) => {
    const button = item.querySelector('button');
    button.addEventListener('click', async () => {
      const category = button.value;
      try {
        const response = await fetch(`http://localhost:3000/api/products/${dataField}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            category
          })
        });

        const data = await response.json();

        dataField === 'brands' ? (dbValue = 'brand') : (dbValue = 'type');
        filterExtras.innerHTML = '';
        data.forEach((data) => {
          filterExtras.innerHTML += `
            <div class="filter-check w-full">
              <input class="check-${dbValue}" type="checkbox" name="filter-${dbValue}" id="filter-${data[dbValue]}" value="${data[dbValue]}"/>
              <label for="filter-${data[dbValue]}" >${data[dbValue]}</label>            
            </div>
          `;
        });

        const checks = document.querySelectorAll(`.check-${dbValue}`);

        checks.forEach((input) => {
          input.addEventListener('click', () => {
            if (input.checked) {
              setValuesFn(values.push(input.value));
            } else {
              const index = values.indexOf(input.value);
              if (index !== -1) {
                values.splice(index, 1);
              }
              setValuesFn(values);
            }
            console.log(values);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
};

export const filterFetch = async (types, brands) => {
  const filterForm = document.querySelector('#filter-form');
  
  filterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Filter form submitted")
    try {
      const response = await fetch('http://localhost:3000/api/products/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          types,
          brands
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
}