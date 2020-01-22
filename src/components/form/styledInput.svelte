<script>
  export let field, humanized;
</script>

<div class="fxg-form__row fxg-field fxg-field--full">
<slot></slot>
  <label
    class="fxg-field__placeholder fxg-field__floating-placeholder"
    for={field}>
    {humanized}
  </label>
</div>

