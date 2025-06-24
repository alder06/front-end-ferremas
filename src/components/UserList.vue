<template>
  <table class="table table-striped table-bordered">
    <thead class="table-dark">
      <tr>
        <th>RUT</th>
        <th>P.Nombre</th>
        <th>S.Nombre</th>
        <th>P.Apellido</th>
        <th>S.Apellido</th>
        <th>Correo</th>
        <th>Rol</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.user_run }}</td>
        <td>{{ user.user_first_name}}</td>
        <td>{{ user.user_sec_name}}</td>
        <td>{{ user.user_first_surname}}</td>
        <td>{{ user.user_sec_surname}}</td>
        <td>{{ user.user_email}}</td>
        <td>{{ user.role}}</td>
        <td>{{ new Date(user.fecha_nacimiemto).toLocaleDateString() }}</td>
        <td>
          <button
            class="btn btn-sm btn-warning me-2"
            @click="$emit('edit', user)"
          >
            ✏️ Editar
          </button>
          <button
            class="btn btn-sm btn-danger"
            @click="confirmarEliminacion(user.id)"
          >
            🗑️ Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import Swal from "sweetalert2";
  const props = defineProps(["users"]);
  const emit = defineEmits(["edit", "delete"]);

  function confirmarEliminacion(id) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        emit("delete", id);
        Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
      }
    });
  }
</script>