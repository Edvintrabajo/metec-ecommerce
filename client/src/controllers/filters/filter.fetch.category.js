const fetchCategory = async (req, res) => {
    const filterItems = document.querySelectorAll('.filter-item');
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
                    const filterChecks = document.querySelector('#filter-checks');
                    filterChecks.innerHTML = '';
                    console.log(data)
                    data.forEach((data) => {
                        filterChecks.innerHTML += `
                        <div className="filter-check w-full">
                            <input type="checkbox" name="filter-${data.brand}" id="filter-${data.brand}" value="${data.brand}"/>
                            <label htmlFor="filter-${data.brand}" >${data.brand}</label>
                        </div>
                        `;
                    })
                })

        });
    });
}

export default fetchCategory;