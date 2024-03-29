from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = ('id', 'username', 'password')
		extra_kwargs = {'password': {'write_only': True, 'required': False}}

	def create(self, validated_data):
		user = User(
				username = validated_data['username'],
			)
		user.set_password(validated_data['password'])
		user.save()

		return user

	def update(self, instance, validated_data):
		instance.username = validated_data.get('username', instance.username)

		password = validated_data.get('password', None)

		if password is not None:
			instance.set_password(password)
		instance.save()

		return instance
