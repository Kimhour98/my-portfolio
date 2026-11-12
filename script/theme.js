
/* ទាញយកប៊ូតុង btnApply */
const btnApply = document.getElementById('btnApply');

/* បង្កើត Click Event លើ btnApply */
btnApply.addEventListener('click', () => {

    // ទាញយក Radio Button ដែលបានជ្រើសរើស
    const rdoSelected = document.querySelector(
        'input[name="rdoTheme"]:checked'
    );

    // ពិនិត្យមើលថាបានជ្រើសរើស Theme ឬនៅ
    if (rdoSelected) {

        // លុប Theme ចាស់ចេញពី Body
        document.body.className = '';

        // បន្ថែម Theme ថ្មីទៅក្នុង Body
        document.body.classList.add(rdoSelected.value);

    } else {

        // បង្ហាញសារពេលមិនទាន់ជ្រើសរើស Theme
        alert('Please select a theme first!');

    }

});
