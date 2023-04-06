import { useContext } from 'react';
import { Context } from '../../context/Context';

const fetchType = async (req, res) => {
    const { types, setTypes } = useContext(Context);
    const filterItems = document.querySelectorAll('.filter-item');
    const filterExtras = document.querySelector('#filter-extras');

    filterItems.forEach((item) => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const category = button.value;
            fetch ('http://localhost:3000/api/products/types', {
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
                    filterExtras.innerHTML = '';
                    data.forEach((data) => {
                        filterExtras.innerHTML += `
                        <div class="filter-check w-full">
                            <input class="check-type" type="checkbox" name="filter-${data.type}" id="filter-${data.type}" value="${data.type}"/>
                            <label htmlFor="filter-${data.type}" >${data.type}</label>
                        </div>
                        `;
                    })
                })
                .then(() => {
                    const checks = document.querySelectorAll('.check-type');
                    checks.forEach((input) => {
                        input.addEventListener('click', () => {
                            if (input.checked) {
                                setTypes(types.push(input.value));
                            }else{
                                setTypes(types.filter((type) => type !== input.value));
                            }
                            console.log(types);
                        });
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
                
        });
    });
}

export default fetchType;