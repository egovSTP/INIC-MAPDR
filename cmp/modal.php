<div class="modal fade" id="preencher_modal" tabindex="-1" role="dialog" aria-labelledby="preencher_modal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="preencher_modal"><b>Fale Connosco</b></h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label>Nome</label>
        <input type="text" class="form-control" id="nameToSend"></input>
        <label>Email</label>
        <input type="text" class="form-control" id="emailToSend"></input>
        <label>Telefone/Telem&oacute;vel (Opcional)</label>
        <input type="text" class="form-control" id="contactToSend"></input>
        <label>Assunto</label>
        <input type="text" class="form-control" id="subjectToSend"></input>
        <label>Descri&ccedil&atilde;o</label>
        <textarea class="form-control" id="descriptionToSend" rows="5"></textarea>
      </div>
      <center>
        <div id="state_envio" style="tex-align: center"> </div>
      </center>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
        <a href="javascript:sendMessages()" class="btn btn-success">Enviar</a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="video-play-modal" tabindex="-1" role="dialog" aria-labelledby="video-play-modal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="video-play-modal-title"></h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="video-play-modal-content" class="modal-body">
        <iframe id="video-play-modal-frame" width="100%" height="320px" src="" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" target="_parent"></iframe>
        <div id="video-play-modal-resume" class="center"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>