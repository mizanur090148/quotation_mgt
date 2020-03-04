<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <div class="card">
                <div class="card-header font-weight-bold">Create Item</div>
                <div class="card-body card-block">
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">                               
                                <label for="first-name" class="form-control-label font-weight-bold">First Name</label>
                                <input type="text" id="city" class="form-control" placeholder="Enter first name">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="last-name" class="form-control-label font-weight-bold">Last Name</label>
                                <input type="text" id="postal-code" class="form-control" placeholder="Enter last name">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="screen_name" class="form-control-label font-weight-bold">Screen Name</label>
                                <input type="type" id="screen_name" class="form-control" placeholder="Screen name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                                <label for="email" class="form-control-label font-weight-bold">E-mail</label>
                                <input type="type" id="email" class="form-control" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="phone-no" class="form-control-label font-weight-bold">Phone No.</label>
                                <input type="text" id="phone-no" class="form-control" placeholder="Phone no">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="postal-code" class="form-control-label font-weight-bold">Designation</label>
                                <input type="text" id="postal-code" class="form-control" placeholder="Designation">
                            </div>
                        </div>                      
                    </div>
                    <div class="row form-group">
                        <div class="col-4">      
                            <label for="postal-code" class="form-control-label font-weight-bold font-weight-bold">Designation</label>                     
                            <div class="input-group">
                                <select name="select" id="selectLg" class="form-control-lg form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                                <div class="input-group-btn">
                                    <div class="btn-group">
                                        <button type="button" class="form-control">
                                            <i class="fa fa-plus-circle text-primary fa-lg"></i>
                                        </button>                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="phone-no" class="form-control-label font-weight-bold">Roll</label>
                                <select name="select" id="select" class="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="postal-code" class="form-control-label font-weight-bold">Status</label>
                                <select name="select" id="select" class="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                     <div class="row form-group">
                        <div class="col-4">
                            <div class="form-group">
                                <label for="password" class="form-control-label font-weight-bold">Password</label>
                                <input type="password" id="password" name="password3" class="form-control" placeholder="Enter password">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="conformed_password" class="form-control-label font-weight-bold">Password</label>
                                <input type="password" id="conformed_password" name="conformed_password" class="form-control" placeholder="Enter confirmed password">
                            </div>
                        </div>              
                    </div>
                    <div class="form-group row m-t-md">
                        <div class="col-sm-offset-4 col-sm-10 text-center">
                            <button type="submit" class="btn btn-info btn-rounded m-b-10 m-l-5">Submit</button>
                            <button type="submit" class="btn btn-danger btn-rounded m-b-10 m-l-5">Reset</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>