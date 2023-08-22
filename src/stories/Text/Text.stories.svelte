<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Text from '$lib/components/ui/Text.svelte'
</script>

<Meta component={Text} />

<Story name="Default">
  <Text value="Foo bar" />
</Story>
