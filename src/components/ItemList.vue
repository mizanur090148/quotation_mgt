<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <strong class="card-title">Item List</strong>
                </div>
                <div class="card-body">
                    <router-link tag="a" class="btn btn-sm btn-info" to="/item-create">                  
                        <i class="glyphicon glyphicon-plus "></i> New Item
                    </router-link>

                    <div class="pull-right m-b-1">
                        <div class="pull-left" style="margin-right: 10px;">
                            <select class="form-control-sm">
                                <option value="1">All</option>
                                <option value="1">Id</option>
                                <option value="1">Name</option>
                                <option value="1">Brand</option>
                            </select>
                        </div>
                        <div class="pull-left" style="margin-right: 10px;">
                            <input type="text" class="form-control-sm" id="search-input" name="q" value="">
                        </div>
                        <div class="pull-right">
                            <input type="submit" class="btn btn-sm btn-info" value="Search">
                        </div>
                    </div>
                    <hr>
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Lot</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Purchase Price</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Lot</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Purchase Price</th>
                                <th scope="col">Amount</th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Lot</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Purchase Price</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style>   
    .m-b-1 {
        padding-bottom: 15px !important;
    }
</style>
