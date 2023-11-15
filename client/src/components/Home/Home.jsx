import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryPath } from '../../redux/actions';
import ItemCard from '../ItemCard/ItemCard';
import './Home.css';
import load from '../../Media/Loading.gif';

const Home = () => {
	const items = useSelector((state) => state.items);
	const categoryId = useSelector((state) => state.categoryId);
	const categoryPath = useSelector((state) => state.categoryPath);
	const currentItems = items.slice(0, 4);
	const dispatch = useDispatch();

	let loading = useSelector((state) => state.loading);

	useEffect (() => {
		dispatch(getCategoryPath(categoryId));
	}, [loading]);

	return loading ? (
		<img
			id='load'
			src={load}
			alt='Loading...'
		/>
	) : (
		<div id='home'>
			<div id='breadcrumb'>
				{categoryPath.map((e) =>
					<p key={e.id} id='category'>| {e.name}</p>)}
			</div>
			<div>
				<div id='itemcard'>
					{currentItems.map((m) => {
						return (
							<ItemCard
								key={m.id}
								id={m.id}
								title={m.title}
								price={m.price}
								location={m.address.state_name}
								image={m.thumbnail}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
