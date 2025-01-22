<template>
  <section class="wrapper bg-light  upper-end">
    <div class="container py-14 py-md-16">
      <div class="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
        <div class="col-lg-7 position-relative">
          <div
            class="shape bg-dot primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0"
          ></div>
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded mt-md-10 position-relative">
                <img
                  src="/public/assets/media/MediaImages/_DSC4588.JPG"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-12 order-md-2">
                  <figure class="rounded">
                    <img
                    src="/public/assets/media/MediaImages/_DSC4190.JPG"
                    alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-md-10">
                  <div class="card bg-pale-primary text-center counter-wrapper">
                    <div class="col-md-12 order-md-2">
                      <figure class="rounded">
                        <img
                        src="/public/assets/media/MediaImages/_DSC4675.JPG"
                        alt="photo"
                        />
                      </figure>
                    </div>
                    
                    <!--/.card-body -->
                  </div>
                  <!--/.card -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-8">
            We'd Love to Hear From You         
           </h2>
          <div
            v-for="item in contactInfo"
            :key="item.id"
            class="d-flex flex-row"
          >
            <div>
              <div class="icon text-primary fs-28 me-6 mt-n1">
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>

              <address v-if="item.address">
                {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                  item.address.line2
                }}
              </address>

              <p v-if="item.content">{{ item.content }}</p>
              <a v-if="item.mail" :href="item.mail" class="link-body">{{
                item.mail
              }}</a>
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
          <p class="lead text-center mb-10">
            Reach out to us from our contact form and we will get back to you
            shortly.
          </p>
          <form class="contact-form needs-validation" @submit.prevent="submitForm">
            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input v-model="form.firstName" type="text" name="name" class="form-control" placeholder="Jane" required />
                  <label>First Name *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your first name.</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input v-model="form.lastName" type="text" name="surname" class="form-control" placeholder="Doe" required />
                  <label>Last Name *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your last name.</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input v-model="form.email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required />
                  <label>Email *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a valid email address.</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input v-model="form.Phone" type="tel" name="tel" class="form-control" placeholder="+38387793983278" required />
                  <label>Phone Number *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a valid phone number.</div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating mb-4">
                  <textarea v-model="form.message" name="message" class="form-control" placeholder="Your message" style="height: 150px" required></textarea>
                  <label>Message *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your message.</div>
                </div>
              </div>
              <div class="col-12 text-center">
                <input type="submit" class="btn btn-purple rounded-pill btn-send mb-3" value="Send message" />
                <p class="text-muted"><strong>*</strong> These fields are required.</p>
              </div>
            </div>
          </form>

          <!-- /form -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { contactInfo } from "@/data/contact";
import { reactive } from 'vue';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  Phone: '',
  message: ''
});

const submitForm = () => {
  const subject = `Contact from ${form.firstName} ${form.lastName} - ${form.Phone}`;
  const body = `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nDepartment: ${form.Phone}\n\nMessage:\n${form.message}`;

  const mailtoLink = `mailto:info@rccgcityofdavid.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};
</script>

<style lang="scss" scoped></style>
