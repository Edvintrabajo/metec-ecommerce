const fetchData = async (types, brands, category, saveData, setSaveData ) => {
  const filterItems = document.querySelectorAll('.filter-item');
  filterItems.forEach((item) => {
    const button = item.querySelector('button');
    button.addEventListener('click', async () => {
      category = button.value;      
      types = [];
      brands = [];
      // Fetch for types and brands
      fetchTypes(category, types)
      fetchBrands(category, brands);
      filterFetch(types, brands, category, saveData, setSaveData); // Form submit
    });
  });
};

const fetchTypes = async (category, types) => {

  try {
    const response = await fetch(`http://localhost:3000/api/products/types`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category
      })
    });

    const data = await response.json();
    const filterContainer = document.querySelector('#filter-types');

    filterChecks(data, filterContainer, 'type');
   
    const checks = document.querySelectorAll(`.check-type`);
    
    filterAddEvent(checks, types);
    
  } catch (error) {
    console.log(error);
  }
};

const fetchBrands = async (category, brands) => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/brands`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category
      })
    });

    const data = await response.json();
    const filterContainer = document.querySelector('#filter-brands');

    filterChecks(data, filterContainer, 'brand');

    const checks = document.querySelectorAll(`.check-brand`);

    filterAddEvent(checks, brands);

  } catch (error) {
    console.log(error);
  }
};

const filterChecks = (data, container, itemClass) => {
  container.innerHTML = '';
  data.forEach((data) => {
    container.innerHTML += `
      <div class="filter-check w-full">
        <input class="check-${itemClass}" type="checkbox" name="filter-${itemClass}" id="filter-${data[itemClass]}" value="${data[itemClass]}"/>
        <label for="filter-${data[itemClass]}" >${data[itemClass]}</label>            
      </div>
    `;
  });
};

const filterAddEvent = (checks, types) => {
  checks.forEach((input) => {
    input.addEventListener('click', () => {
      if (input.checked) {
        types.push(input.value);
      } 
      else {
        types.splice(types.indexOf(input.value), 1);
      }
      console.log(types);
    });
  });
}

const filterFetch = async (types, brands, category, saveData, setSaveData) => {
  const filterForm = document.querySelector('#filter-form');
  filterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/products/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category,
          type : types,
          brand : brands,
        })
      });
      const data = await response.json();
      setSaveData(saveData.products = data);
      console.log(saveData.products)
      window.location.href = 'http://localhost:5173/products-filtred';

    } catch (error) {
      console.log(error);
    }
  });
}

export default fetchData;