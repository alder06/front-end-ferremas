<template>
  <div>
    <UserForm :modelValue="editingUser" @submit="saveUser" />
    <UserList :users="users" @edit="startEdit" @delete="deleteUser" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import userService from "@/services/user.service";
import UserForm from "@/components/user.form.vue";
import UserList from "@/components/user.list.vue";

const users = ref([]);
const editingUser = ref(null);

function loadUsers() {
  userService.getAll().then((response) => {
    users.value = response.data;
  });
}

function saveUser(user) {
  if (user.user_id) {
    userService.update(user.user_id, user).then(loadUsers);
  } else {
    userService.create(user).then(loadUsers);
  }
  editingUser.value = null;
}

function startEdit(user) {
  editingUser.value = user;
}

function deleteUser(id) {
  userService.delete(id).then(loadUsers);
}

onMounted(() => {
  loadUsers();
});
</script>
