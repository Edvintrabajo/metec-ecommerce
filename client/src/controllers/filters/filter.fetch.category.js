const fetchCategory = async (req, res) => {
    const filterItems = document.querySelectorAll('.filter-item');
    const filterChecks = document.querySelector('#filter-checks');
    let brands = [];

    filterItems.forEach((item) => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const category = button.value;
            fetch ('http://localhost:3000/api/products/brands', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category
                })
              })
                .then(response => response.json())
                .then(data => {
                    filterChecks.innerHTML = '';
                    console.log(data)
                    data.forEach((data) => {
                        filterChecks.innerHTML += `
                        <div class="filter-check w-full">
                            <input class="check" type="checkbox" name="filter-${data.brand}" id="filter-${data.brand}" value="${data.brand}"/>
                            <label htmlFor="filter-${data.brand}" >${data.brand}</label>
                        </div>
                        `;
                    })
                })
                .then(() => {
                    const checks = document.querySelectorAll('.check');
                    checks.forEach((input) => {
                        input.addEventListener('click', () => {
                            if (input.checked) {
                                brands.push(input.value);
                            }else{
                                brands = brands.filter((brand) => brand !== input.value);
                            }
                            console.log(brands)
                        });
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
                
        });
    });
}

export default fetchCategory;