<template>
    <div> 
        <div class="text-left h4">Bulk Label Maker from Excel</div>
        <div class="instructions container border p-3">
             <div class="row mt-2">
                <div class="col-sm-7">
                    Prepare your Excel Spreadsheet with the following columns:
                </div>
                <div class="col-sm">
                    <a href="#">download an example</a>
                </div> 
            </div>

            <div class="row mt-2">
                <div class="col-sm">
                    <ul class="list-group list-group-horizontal"> 
                        <li class="list-group-item list-group-item-dark">Barcode ID</li>
                        <li class="list-group-item list-group-item-dark">Barcode Text</li>
                    </ul>
                </div> 
            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <ol class="ml-n4 instructions-list">
                        <li>Select barcode printer</li>
                        <li>Select label template</li>
                        <li>Upload spreadsheet</li>
                        <li>Click 
                             <ul class="list-group list-group-horizontal"> 
                                <li class="list-group-item shadow rounded">Generate</li>
                             </ul>
                        </li>
                    </ol>
                </div> 
            </div> 
        </div>
        <div class="container mt-3">
             <div class="row mt-2">
                <b-dd size="sm" text="Select printer" split  variant="secondary" split-variant="outline-secondary" class="m-1">
                <b-dd-item-button v-for="printer in printers"
                                    :key="printer"
                                    :value="printer">{{ printer }}</b-dd-item-button> 
                </b-dd>
            </div>
             <div class="row mt-2">
                <b-dd size="sm" text="Select label template" split  variant="secondary" split-variant="outline-secondary" class="m-1">
                <b-dd-item-button v-for="template in templates"
                                    :key="template"
                                    :value="template">{{ template }}</b-dd-item-button> 
                </b-dd>
            </div>
            <div class="row mt-2">
                <b-btn  variant="outline-primary" class="mx-1" size="sm">
                    Upload Spreadsheet
                </b-btn> 
            </div>
            <div class="row mt-3">
                <b-btn variant="success" class="mx-1 shadow" size="sm">Generate</b-btn>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            printers: ['Printer 1', 'Printer 2'],
            templates: ['Template 1', 'Template 2']
        }
    }
}
</script>