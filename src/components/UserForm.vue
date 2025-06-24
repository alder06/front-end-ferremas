<template>
  <form
    @submit.prevent="handleSubmit"
    class="card card-body shadow-sm p-4 mb-4"
  >
    <div class="row g-3">
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.run"
          placeholder="RUT"
          required
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.user_first_name"
          placeholder="Primer Nombre"
          required
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          v-model="user.user_sec_name"
          placeholder="Segundo Nombre"
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.user_first_surname"
          placeholder="Primer Apellido"
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.user_sec_surname"
          placeholder="Segundo Apellido"
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.user_email"
          type="email"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          v-model="user.user_password"
          type="password"
          placeholder="Contraseña"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="roleSelect" class="form-label">Rol</label>
        <select
          id="roleSelect"
          class="form-select"
          v-model="user.role"
          required
        >
          <option disabled value="">Selecciona un rol</option>
          <option value="1">Administrador</option>
          <option value="2">Vendedor</option>
        </select>
      </div>
      <div class="col-md-6 d-flex align-items-end">
        <button class="btn btn-primary w-100" type="submit">
          {{ user.id ? "Actualizar Usuario" : "Crear Usuario" }}
        </button>
      </div>
    </div>
  
  </form>
</template>

<script setup>
  import { ref, watch } from "vue";
  const props = defineProps(["modelValue"]);
  const emit = defineEmits(["submit"]);

  const user = ref({
    user_run: "",
    user_first_name: "",
    user_sec_name: "",
    user_first_surname: "",
    user_sec_surname: "",
    user_email: "",
    user_password: "",
    role: "",
  });

  // watch(
  //   () => props.modelValue,
  //   (newVal) => {
  //     if (newVal) {
  //       user.value = { ...newVal };
  //       if (user.value.fecha_nacimiemto) {
  //         user.value.fecha_nacimiemto =
  //           user.value.fecha_nacimiemto.split("T")[0];
  //       }
  //     }
  //   },
  //   { immediate: true }
  // );

  function handleSubmit() {
  emit("submit", { ...user.value });
  user.value = {
    user_run: "",
    user_first_name: "",
    user_sec_name: "",
    user_first_surname: "",
    user_sec_surname: "",
    user_email: "",
    user_password: "",
    role: "",
  };
}
</script>