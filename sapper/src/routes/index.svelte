<script>
import useNavigable from '../assets/js/composition/useNavigable'

const [navigable, invoke] = useNavigable(
  ['baleada', 'tortilla', 'logic', 'composition']
)

function handleClick (evt) {
  invoke('next')
  console.log(navigable.item)
}
</script>

<main>
  <button on:click={handleClick}>do stuff</button>
  <span>{ navigable.item }</span>
</main>
