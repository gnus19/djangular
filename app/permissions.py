from rest_framework.permissions import BasePermission, IsAuthenticated

class CreateUserPermission(BasePermission):
    """
    Create user permission scheme
    """
    def has_permission(self, request, view):
        # allow anonymous users to create users
        return view.action == 'create' or IsAuthenticated.has_permission(self, request, view)

    def has_object_permission(self, request, view, obj):
        # allow logged in user to edit own details, allows staff to edit all records
        return obj == request.user or request.user.is_staff
 
class IsStaffOrTargetUser(BasePermission):
    def has_permission(self, request, view):
        # allow user to list all users if logged in user is staff
        return view.action == 'retrieve' or request.user.is_staff
 
    def has_object_permission(self, request, view, obj):
        # allow logged in user to view own details, allows staff to view all records
        return obj == request.user or request.user.is_staff