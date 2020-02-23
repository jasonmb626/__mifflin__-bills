const add_vendor_button = document.getElementById('add-vendor');
const new_vendor_row_template = document.getElementById('new-vendor-row');
const table_body = document.getElementById('table-body');
const delete_button = document.getElementById('delete-btn');

const deleteRow = e => {
    e.target.parentElement.parentElement.remove();
};

add_vendor_button.addEventListener('click', () => {
    const new_vendor_row = new_vendor_row_template.cloneNode(true);
    new_vendor_row.content.querySelector('button').addEventListener('click', deleteRow);
    table_body.prepend(new_vendor_row.content);
});