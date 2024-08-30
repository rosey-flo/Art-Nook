function ArtItem() {


	return (

			<div className="card mb-3">
					<div className="row g-0">
							<div className="col-md-4">
									<img src="/images/art-icon/png" className="rounded-start" />
							</div>
							<div className="col-md-8">
									<div className="card-body">
											<h5 className="card-title">Artwork Title</h5>
											<p className="card-text">description</p>
											<p className="card-text"><small className="text-body-secondary">media</small></p>
											<p className="card-text"><small className="text-body-secondary">price$</small></p>

											<span className="insta-label m-3">Instagram Link</span>
											<a href={props.data.githubRepo} target="_blank">

											</a>

									</div>
							</div>
					</div>
			</div>
	)
}

export default ArtItem