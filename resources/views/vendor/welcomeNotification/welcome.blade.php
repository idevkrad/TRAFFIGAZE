<!-- <form method="POST">
    @csrf

    <input type="hidden" name="email" value="{{ $user->email }}"/>

    <div>
        <label for="password">{{ __('Password') }}</label>

        <div>
            <input id="password" type="password" class="@error('password') is-invalid @enderror"
                   name="password" required autocomplete="new-password">

            @error('password')
            <span>
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div>
        <label for="password-confirm">{{ __('Confirm Password') }}</label>

        <div>
            <input id="password-confirm" type="password" name="password_confirmation" required
                   autocomplete="new-password">
        </div>
    </div>

    <div>
        <button type="submit">
            {{ __('Save password and login') }}
        </button>
    </div>
</form> -->

<!DOCTYPE html>
<html lang="en">
    @php $css_file = "css/app.css"; @endphp
    <head>
        <title>DOST | New Password</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link rel="icon" href="{{ url('dost.ico') }}">
        <script src="{{ mix('/js/manifest.js') }}" defer></script>
        <script src="{{ mix('/js/vendor.js') }}" defer></script>
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>

    <body>
    <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="text-primary p-4">
                                    <h5 class="text-primary"> DOST Portal</h5>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div class="p-2">

                                    @error('password')
                                        <div class="alert alert-danger text-center mt-4 mb-4" role="alert">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                    
                                    <form class="form-horizontal customform mt-4" method="POST">
                                        @csrf
                                        <div class="mb-0">
                                            <label for="password" class="form-label" >Password</label>
                                            <input type="password" class="form-control" id="password" name="password" required autocomplete="new-password">
                                        </div>
                                        <div class="mb-0">
                                            <label for="password-confirm" class="form-label" >New Password</label>
                                            <input type="password" class="form-control" id="password-confirm" name="password_confirmation" required autocomplete="new-password">
                                        </div>
                    
                                        <div class="text-end mt-3 mb-2">
                                            <button type="submit" class="btn btn-primary w-md waves-effect waves-light">Confirm</button>
                                        </div>
    
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <p>© DOST PORTAL <i class="mdi mdi-heart text-danger"></i> 2022</p>
                        </div>

                    </div>
                </div>
            </div>
    </body>
</html>

