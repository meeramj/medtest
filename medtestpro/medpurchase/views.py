from django.shortcuts import render, redirect

# Create your views here.
def medicine(request):
    if request.method == 'POST':
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        phone = request.POST['phone']
        dist = request.POST['dist']
        area = request.POST['area']
        med = request.POST['med']

        # user = User.objects.create_user(firstname=firstname, lastname=lastname, username=username, email=email,
        #                                 phone=phone, dist=dist, area=area, med=med)
        # user.save()
        return redirect('/medpurchase/thanks')

    return render(request, "medicine.html")


def thanks(request):
    return render(request, "thanks.html")


def dist(request):
    ans = request.GET['district']
    return render(request, 'medicine.html', {'ans': ans})
