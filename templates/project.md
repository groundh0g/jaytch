<div class="col-lg-12">

    <div style="background-color:#88a; color:#fff; text-align:center;">
        <table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto; background-color:inherit;">
            <tr>
                <td><img src="{{ site.baseurl }}/templates/images/product-logo.png"/></td>
                <td style="text-align:center;">
                    <p style="font-size:2.3em; font-weight:bold;">Project B.Y.R.D.</p>
                    <p style="font-size:1.3em;">Your clients expect the best.</p>
                    <p style="font-size:1.8em;">Give them the BYRD!</p>
                </td>
            </tr>
        </table>
    </div>


    <div class="col-lg-4">
        <h2 style="font-weight:bold;">Flexible</h2>
        <img src="{{ site.baseurl }}/templates/images/product-flexible.png" style="float:left; width:50%; margin-right:5px;" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum quam a rutrum elementum. Morbi in dui id tellus interdum auctor. Maecenas varius scelerisque nulla, in sollicitudin ante tincidunt eu. In eu dolor sit amet purus cursus ultrices quis eget nunc. Pellentesque in lacus fermentum magna elementum ultricies. Praesent convallis, arcu at finibus elementum, sem ligula ullamcorper dui, vel imperdiet massa erat eu justo. </p>
    </div>
    <div class="col-lg-4">
        <h2 style="font-weight:bold;">Scalable</h2>
        <img src="{{ site.baseurl }}/templates/images/product-scalable.png" style="float:left; width:50%; margin-right:5px;" />
        <p>Maecenas scelerisque sodales dolor, at ullamcorper massa finibus in. Maecenas tincidunt risus sit amet venenatis ultrices. Proin eu molestie risus. Suspendisse rutrum urna sit amet viverra facilisis. Duis vel tellus eget massa ultrices ultricies. Ut eget dictum libero, luctus ornare lorem. Vivamus pretium in dui nec consectetur. Nullam dictum sapien non arcu luctus, at vestibulum arcu pretium. Etiam erat arcu, tristique gravida eleifend id, cursus vitae tellus. </p> 
    </div>
    <div class="col-lg-4">
        <h2 style="font-weight:bold;">Reliable</h2>
        <img src="{{ site.baseurl }}/templates/images/product-reliable.png" style="float:left; width:50%; margin-right:5px;" />
        <p> Vivamus nec ultrices justo, laoreet tristique nisi. Phasellus non velit ornare, aliquet lorem et, varius velit. Sed ut justo sem. Vestibulum varius tincidunt felis id volutpat. Proin tempor bibendum leo in tempus. Nunc et urna et lectus lacinia cursus. Sed sollicitudin eget mauris sit amet dapibus. Duis vel varius nulla, in laoreet enim. Morbi mattis nisi nunc, vel consectetur justo maximus euismod. In tempus tellus vel scelerisque iaculis. </p>
    </div>
    
</div>
<div class="col-lg-12">

    <hr/>

    {% if page.showTitle && page.title %}
    <h2 style="font-weight:bold;">{{ page.title }}</h2>
    {% endif %}

    {% include jaytch/snips/post-summary.liquid limit=25 showArchiveLink=true archiveUrl="/archive.html" %}

</div>