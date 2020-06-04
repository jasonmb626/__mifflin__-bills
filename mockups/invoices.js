const add_invoice_button = document.getElementById('add-invoice');
const new_invoice_row_template = document.getElementById('new-invoice-row');
const table_body = document.getElementById('table-body');
const delete_button = document.getElementById('delete-btn');

const vendors = [
   'Corporate Office Supplies Supplier',
   'Hercules HVAC',
   'Lovelace Computer Equipment',
   'Mustercard',
   'Phil\'s Water Jugs',
   'Vending Machine People',
   'Voltaire\'s Electric',
];

const gl_codes = [
    'Beverages',
    'Shipping',
    'Office Supplies',
    'Building Repairs',
    'Computer Equipment'
];

const deleteRow = e => {
    e.target.parentElement.parentElement.remove();
};

add_invoice_button.addEventListener('click', () => {
    const new_invoice_row = new_invoice_row_template.cloneNode(true);
    new_invoice_row.content.querySelector('button').addEventListener('click', deleteRow);
    table_body.prepend(new_invoice_row.content);
});