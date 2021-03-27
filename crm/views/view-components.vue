<template>
  <div class="content">
    <h1>Components</h1>
    <h2>Button component</h2>
    
    <div class="text-block">
      Basic component that is used to trigger bussiness logic. Button component has two types:
      <ul>
        <li><strong>Primary: </strong> more prominent and has a background color </li>
        <li><strong>Secondary: </strong>less prominent, has no background</li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <td>Type: primary</td>
          <td>Code</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            ssss
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <w-button>Default</w-button>
      <w-button type="dashed">Dashed</w-button>
      <w-button type="primary">Primary</w-button>
      <w-button type="success">Success</w-button>
      <w-button type="warning">Warning</w-button>
      <w-button type="info">Info</w-button>
      <w-button type="error">Error</w-button>
      <w-button type="text">Text</w-button>
    </p>
    <p>
      <w-button id="adjust-btn" type="icon-only" icon="icon-adjust"></w-button>
      <w-button id="global-btn" type="icon-only" icon="icon-global"></w-button>
      <w-button id="global-btn" icon="icon-global"></w-button>
      <w-button id="global-btn" type="primary" icon="icon-global"></w-button>
      <w-button id="global-btn" type="success" icon="icon-global"></w-button>
      <w-button id="global-btn" type="warning" icon="icon-global"></w-button>
      <w-button id="global-btn" type="info" icon="icon-global"></w-button>
      <w-button id="global-btn" type="error" icon="icon-global"></w-button>
      <w-button id="global-btn" type="text" icon="icon-global"></w-button>
    </p>
    <p>
      <w-button type="primary" :disabled="true">Primary</w-button>
      <w-button type="primary" :disabled="false">Primary</w-button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>